import React from "react";
import styles from "../../scss/components/Title.module.scss";

type Size = "xs" | "s" | "m" | "l" | "xl";
type Status =
  | "default"
  | "primary"
  | "success"
  | "info"
  | "warning"
  | "error"
  | "disabled";

export type Types = {
  title: string;
  size?: Size;
  status?: Status;
} & React.HTMLAttributes<HTMLHeadingElement>;

const Title: React.FC<Types> = ({
  title,
  size = "m",
  status = "default",
  ...arg
}) => {
  return (
    <h1
      className={`${styles.title} ${styles[size]} ${styles[status]}`}
      {...arg}
    >
      {title}
    </h1>
  );
};
export default Title;
