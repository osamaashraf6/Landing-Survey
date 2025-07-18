import * as Icon from "@/assets/icons/Icons.js";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

export default function HeaderSurv() {
  const { theme } = useContext(ThemeContext);
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
      <div className="flex items-center gap-2 md:my-5 pb-6">
        <h1
          className={`font-semibold text-3xl capitalize ${
            theme === "dark" ? "text-white" : "text-[#1E1F24] "
          }`}
        >
          Welcome, {currentUser?.user?.name}
        </h1>
        <Icon.PiHandWavingDuotone className="text-3xl text-amber-400" />
      </div>
    </div>
  );
}
