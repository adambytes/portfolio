"use client";
import AWS from "./AWS.svg";
import Azure from "./Azure.svg";
import Docker from "./Docker.svg";
import GCP from "./Google Cloud.svg";
import Django from "./Django.svg";
import GitHubActions from "./GitHub Actions.svg";
import Java from "./Java.svg";
import JavaScript from "./JavaScript.svg";
import Kubernetes from "./Kubernetes.svg";
import NodeJs from "./NodeJs.svg";
import Python from "./Python.svg";
import React from "./React.svg";
import TypeScript from "./TypeScript.svg";
import Webpack from "./Webpack.svg";
import NextJS from "./NextJs.svg";
import Image from "next/image";
import cn from "@/utils/cn";
import { motion } from "framer-motion";
import { useState } from "react";

const styles = {
  icon: "w-8 h-8",
  iconContainer: "bg-slate-100 rounded-lg p-2",
};

export default function TechList() {
  const [svgList, setSvgList] = useState<any[]>([
    AWS,
    Azure,
    Docker,
    GCP,
    Django,
    GitHubActions,
    Java,
    JavaScript,
    Kubernetes,
    NodeJs,
    Python,
    React,
    TypeScript,
    Webpack,
    NextJS,
  ]);

  return (
    <motion.div
      className="grid grid-cols-5 gap-8 py-4"
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.2 } },
        exit: { opacity: 0 },
      }}
      initial="hidden"
      animate="show"
    >
      {svgList.map((icon: any, i: number) => {
        return (
          <motion.div
            key={i}
            className={cn(styles.iconContainer, "shadow-lg shadow-slate-800")}
            onClick={() =>
              setSvgList((prev) => prev.filter((_, index) => index !== i))
            }
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 },
            }}
          >
            <Image {...icon} alt={icon.name} className={styles.icon} />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
