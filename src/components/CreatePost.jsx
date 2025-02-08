import { IoMdClose } from "react-icons/io";

const CreatePost = ({ open, onClose, children }) => {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[500] flex items-center justify-center transition-colors ${open ? "visible bg-black/20" : "invisible"} `}
      >
        {/* modal */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`m-4 w-[40rem] rounded-xl bg-background p-6 shadow transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"} `}
        >
          <button
            onClick={onClose}
            className="absolute right-2 top-2 rounded-lg bg-background p-1 text-gray-400 hover:bg-gray-50 hover:text-gray-600"
          >
            <IoMdClose />
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default CreatePost;
