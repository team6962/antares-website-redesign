import Image from "next/image";

import type { Sponsor } from "@/content/sponsors";
import styles from "./logo-marquee.module.css";
import { asset } from "@/lib/asset";

type LogoMarqueeProps = {
  sponsors: Sponsor[];
  /**
   * Seconds for one pass of the sponsor list. Longer is calmer.
   *
   * This is per pass of the list, not of the rendered row: a short list gets
   * repeated to fill the screen, and without scaling the duration with it the
   * strip would drift twice as fast with six sponsors as with twelve.
   */
  speed?: number;
};

/**
 * Each row has to be at least as wide as the window, or the animation carries
 * an empty gap across the band once the first row scrolls off. Six partners
 * come to roughly 1360px, which is fine on a laptop and 550px short on a
 * 1920 monitor, so the list repeats until there is enough of it. Twelve items
 * covers an ultrawide screen with room to spare.
 */
const MIN_ITEMS_PER_ROW = 12;

/**
 * A slow, continuous strip of sponsor logos.
 *
 * The list is rendered twice so the animation can loop seamlessly; the second
 * copy is hidden from assistive technology. The strip stops on hover and for
 * readers who prefer reduced motion.
 */
export function LogoMarquee({ sponsors, speed = 46 }: LogoMarqueeProps) {
  const withLogos = sponsors.filter((sponsor) => sponsor.logo);

  const repeats = withLogos.length
    ? Math.max(1, Math.ceil(MIN_ITEMS_PER_ROW / withLogos.length))
    : 1;
  const row = Array.from({ length: repeats }, () => withLogos).flat();

  return (
    <div className={styles.viewport}>
      <div
        className={styles.track}
        style={{ "--marquee-duration": `${speed * repeats}s` } as React.CSSProperties}
      >
        {[0, 1].map((copy) => (
          <ul className={styles.row} key={copy} aria-hidden={copy === 1 || undefined}>
            {row.map((sponsor, index) => (
              <li className={styles.item} key={`${copy}-${index}-${sponsor.name}`}>
                <Image
                  className={styles.logo}
                  src={asset(sponsor.logo as string)}
                  /* Name it once. Every later repeat is decoration, and a
                     screen reader should not read the list several times. */
                  alt={copy === 0 && index < withLogos.length ? sponsor.name : ""}
                  width={sponsor.width ?? 200}
                  height={sponsor.height ?? 60}
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
