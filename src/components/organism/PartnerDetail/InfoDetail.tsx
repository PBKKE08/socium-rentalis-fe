import Image from "next/image";
import { NumericFormat } from "react-number-format";

export default function InfoDetail() {
  return (
    <>
      <p className="text-heading font-medium text-2xl mb-1">John Doe</p>
      <p className="text-heading font-bold text-3xl mb-4">
        <NumericFormat
          value={100000}
          displayType="text"
          prefix="IDR "
          suffix="/jam"
          decimalSeparator=","
          thousandSeparator="."
        />
      </p>
      <div className="flex flex-col gap-1">
        <p className="text-primary-200 text-lg font-medium">Detail</p>
        <p className="text-font-primary-400">
          Gender : <span className="text-heading">Male</span>
        </p>
        <p className="text-font-primary-400">
          Category : <span className="text-heading">Cars</span>
        </p>
        <div className="text-font-primary-400 flex items-center gap-1">
          <p>Rating : </p>
          <span className="inline-flex gap-1 items-center justify-center">
            <Image
              src="/images/icon-star.svg"
              width={20}
              height={20}
              alt="star"
            />
            <p className="text-heading">5</p>
          </span>
        </div>
        <p className="text-heading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus
          facilisis gravida. Integer consectetur placerat hendrerit. Vivamus
          pretium lobortis convallis. Morbi metus nunc, tincidunt non nibh at,
          sollicitudin ullamcorper felis. Cras semper vehicula elit, vitae
          sodales tortor sagittis quis. Fusce molestie porta aliquet. Praesent
          et eros sed nibh dignissim auctor ut vel enim. Mauris sodales risus
          magna, nec consequat ipsum vehicula in. Morbi a tortor vitae sem
          imperdiet aliquam. Morbi eu blandit erat, vel dignissim nibh.
        </p>
      </div>
    </>
  );
}
