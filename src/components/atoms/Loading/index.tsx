import styles from "@/styles/Loading.module.css";
export default function Loading() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className={styles.spinner}></div>
    </div>
  );
}
