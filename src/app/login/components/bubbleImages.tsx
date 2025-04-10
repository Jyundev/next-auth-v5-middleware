"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./bubbleImages.module.css";

export default function BubbleImages() {
  // const images = [bubble1, bubble2, bubble3, bubble4, bubble5, bubble6];

  return (
    <div className={styles.imgWrap}>
      {/* <>
            {images.map((src, idx) => (
                <div
                    key={idx}
                    className={styles.bubble}
                    style={{
                        top: `${Math.random() * 90}%`,
                        left: `${Math.random() * 90}%`,
                    }}
                >
                    <Image src={src} alt={`bubble-${idx}`} style={{ objectFit: 'contain' }} />
                </div>
            ))}
        </> */}
    </div>
  );
}
