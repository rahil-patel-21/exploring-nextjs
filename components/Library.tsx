// Imports
import IcAdd from "./icons/ic_add";
import IcPlaylist from "./icons/ic_playlist";

const Library = () => {
  const onClick = () => {};

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <IcPlaylist></IcPlaylist>
          <p className="text-neutral-400 font-medium text-md px-2">
            Your Library
          </p>
        </div>
        <IcAdd
          className="  text-neutral-400 
            cursor-pointer 
            hover:text-white 
            transition"
        ></IcAdd>
      </div>
    </div>
  );
};

export default Library;
