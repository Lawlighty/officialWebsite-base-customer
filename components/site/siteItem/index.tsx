import Image from "next/image";
import cName from "classnames";
import Link from "next/link";

const SiteItem = ({ site }: any) => {
  const { name = "", url = "", img = "", alt = "" } = site;
  return (
    <div className="rounded-lg  w-full p-6">
      <div
        className="flex items-end rounded-lg overflow-hidden relative w-full p-6"
        style={{ height: "260px" }}
      >
        <Image
          alt={alt}
          // className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
          className="absolute w-full h-full object-cover inset-0"
          src={img}
          height={220}
          width={336}
        ></Image>

        <div
          style={{
            background:
              "linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,.3))",
          }}
          className="transform duration-1000 absolute flex inset-0  w-full h-full flex-col items-center text-center justify-end text-xl opacity-0 hover:opacity-100 text-white"
        >
          <div className="bg-black w-full p-4">
            <div className="text-2xl">{name}</div>
            <div className="text-sm text-blue-500 hover:text-blue-200 cursor-pointer">
              <Link href={url} target="_blank" rel="noopener">
                {url}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SiteItem;
