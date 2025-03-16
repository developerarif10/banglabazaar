import Link from "next/link";
import { Toaster } from "./sonner";

const ActionOfToast = ({ alt, text, link }) => {
  return (
    <Toaster altText={alt}>
      <Link href={link}>{text}</Link>
    </Toaster>
  );
};

export default ActionOfToast;
