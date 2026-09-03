"use client";

import { motion } from "motion/react";
import Link from "next/link";

/** Next's <Link>, wrapped so it accepts whileHover/whileTap etc. */
export const MotionLink = motion.create(Link);
