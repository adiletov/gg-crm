interface Props {
  title: string;
  description: string;
}
export default function Heading({ title, description }: Props) {
  return (
    <div className="mb-5 sm:mb-8">
      <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
        {title}
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
}
