const geo_route = "https://www.geoguessr.com/user/658d58f7715d05059ff28ab9";

export default function Bio() {
  return (
    <div className="flex flex-col gap-2 pb-6">
      <p className="text-sm text-gray-600">
        Data Science, Math @{" "}
        <span className="text-yellow-600">Michigan</span>
      </p>
      <p className="text-sm text-gray-600">
        In my freetime, I've been enjoying{" "}
        <a
          href={geo_route}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:text-gray-500 underline"
        >
          GeoGuessr
        </a>{" "}
        & building digital experiences 📌
      </p>
      <p className="text-sm text-gray-600">
        I have a <span className="font-bold">passion</span> for active transportation, writing clean code, and designing.
      </p>
    </div>
  );
} // Bio.tsx