import ContactAddress from "@/components/culture/ContactAddress/ContactAddress";
import Team from "@/components/culture/Team";
import styles from "./index.module.scss";
const Culture = () => {
  const info = {
    title: "客户成功",
    desc: "致青春",
  };
  return (
    <>
      {/* 视差 */}
      <div>
        <div className={styles["parallax-container"]}>
          <div className={styles["parallax-image"]}></div>
          <section className={styles["parallax-content"]}>
            <div className={styles["title__wrapper"]}>
              <div className="text-5xl md:text-7xl text-gray-100 mb-8">
                {info?.title}
              </div>
              <div className="text-2xl md:text-3xl text-gray-100">
                {info?.desc}
              </div>
            </div>
          </section>
        </div>
      </div>
      <ContactAddress></ContactAddress>
      <Team></Team>
    </>
  );
};
export default Culture;
