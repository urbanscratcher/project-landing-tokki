import { MdCheck as CheckIcon } from "react-icons/md";
import styles from "./spec.module.scss";

export type SpecInfo = {
  title: string;
  specs: Array<string>;
};

interface SpecProps {
  info: SpecInfo;
}

const Spec = ({ info }: SpecProps) => {
  return (
    <div className={styles.spec}>
      <section>
        <h1>{info.title}</h1>
        <ul>
          {info.specs.map((i) => {
            return (
              <li key={i}>
                <CheckIcon /> &nbsp; {i}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Spec;
