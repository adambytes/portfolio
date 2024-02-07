"use client";
import AWS from "@/public/images/AWS.svg";
import Azure from "@/public/images/Azure.svg";
import Docker from "@/public/images/Docker.svg";
import GCP from "@/public/images/Google Cloud.svg";
import Django from "@/public/images/Django.svg";
import GitHubActions from "@/public/images/GitHub Actions.svg";
import Java from "@/public/images/Java.svg";
import JavaScript from "@/public/images/JavaScript.svg";
import Kubernetes from "@/public/images/Kubernetes.svg";
import NodeJs from "@/public/images/NodeJs.svg";
import Python from "@/public/images/Python.svg";
import React from "@/public/images/React.svg";
import TypeScript from "@/public/images/TypeScript.svg";
import Webpack from "@/public/images/Webpack.svg";
import NextJS from "@/public/images/NextJs.svg";
import Image from "next/image";
import cn from "@/utils/cn";
import { motion } from "framer-motion";
import { SVGProps, useMemo } from "react";

const styles = {
  icon: "w-8 h-8",
  iconContainer: "bg-slate-100 rounded-lg p-2",
};

export default function TechList() {
  const svgList = useMemo(
    () => [
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
    ],
    []
  );

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
      {svgList.map((Icon: any, i: number) => {
        return (
          <motion.div
            key={"icon" + i}
            className={cn(styles.iconContainer, "shadow-lg shadow-slate-800")}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 },
            }}
          >
            <Image
              src={Icon}
              alt="icon"
              className={styles.icon}
              width={32}
              height={32}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
