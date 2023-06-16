import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          {/* Title */}
          <h1 className="text-white text-2xl font-semibold">
            Musify original & Exclusive podcasts
          </h1>
          {/* Tiles */}
          <div></div>
        </div>
      </Header>
    </div>
  );
}
