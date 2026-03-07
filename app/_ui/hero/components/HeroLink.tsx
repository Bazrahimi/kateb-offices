import Link from "next/link";
type Props = {
  href: string;
  label: string;
};
const HeroLink = ({ href, label }: Props) => {
  return (
    <Link
      href={href}
      className="font-semibold text-gray-50 hover:text-green-600"
    >
      {label}
    </Link>
  );
};

export default HeroLink;
