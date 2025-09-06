import FacebookIcon from "../public/icons/FacebookIcon";
const Navbar = () => {
  return (
    <div className="h-[56px] bg-[#1C1E21] flex items-center px-[20px]">
      <div className="flex items-center gap-[20px]">
        <FacebookIcon className="" />
        <input
          type="search"
          className="h-[40px] rounded-full max-w-[240px] placeholder:text-gray-[200] bg-[#858585]"
          placeholder="Search Facebook"
        />
      </div>
    </div>
  );
};

export default Navbar;
