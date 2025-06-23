import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import * as Images from "@/assets/images/Images";
import {
  FaCirclePlus,
  MdOutlineLogout,
  BsPersonWorkspace,
  FaChevronDown,
} from "@/assets/icons/Icons";
import { useNavigate, useLocation } from "react-router-dom";
import { items } from "@/utils/data";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/userslice/apiCalls";
import { toast } from "sonner";
const SurveySidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (url) => {
    navigate(url);
  };
  const dispatch = useDispatch();
  const handleLogOut = () => {
    logout(dispatch);
    toast.success("Logout successfully");
  };
  const isDashboard = location.pathname === "/dashboard";
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Sidebar
      className="h-[calc(100vh-4.25rem)] flex flex-col border-r border-gray-200    [box-shadow:0_4px_16px_#00000814] mt-[4.25rem]"
      collapsible="icon"
    >
      <SidebarContent className="  flex-1 ">
        <div className="flex items-center   gap-2 w-full [box-shadow:0_0px_16px_#00000816] p-3.5">
          <Avatar className="w-10 h-10 flex items-center">
            <AvatarImage
              src={Images.userAvatar}
              alt=""
              className="w-8 h-8 rounded-full overflow-hidden object-fill"
            />
            <AvatarFallback className="rounded-lg text-red-400">name</AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-2 w-24">
            <p className="font-medium text-sm text-gray-500 capitalize">
              {currentUser?.user?.name}
            </p>
            <FaChevronDown />
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Workspace with Dropdown */}
              <SidebarMenuItem className="mb-2">
                <Collapsible asChild className="group/collapsible" defaultOpen={true}>
                  <div className="flex flex-col w-full">
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className="flex items-center gap-2 hover:bg-[#DBF8FA] w-full ">
                        <BsPersonWorkspace className="text-[#62636C] text-base" />
                        <span className="capitalize font-poppins text-gray-500 font-medium">
                          workspace
                        </span>
                        <FaChevronDown className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180 text-sm text-[#62636C]" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                      <SidebarMenuSub>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton asChild>
                            <button
                              onClick={() => handleNavigation("/dashboard")}
                              className={`w-full text-left font-medium text-sm capitalize mt-2 ${
                                isDashboard
                                  ? "bg-[#DBF8FA] py-2 px-4 rounded-lg text-gray-950"
                                  : "text-[#62636C]"
                              }`}
                            >
                              my workspace
                            </button>
                          </SidebarMenuSubButton>

                          <SidebarMenuSubButton asChild className="mt-2  mb-2 hover:bg-transparent">
                            <div className="flex items-center">
                              <FaCirclePlus className="!text-xs !text-[#80828D]" />
                              <span className="text-[#80828D] text-xs">create workspace</span>
                            </div>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              </SidebarMenuItem>

              {/*  dynamic items */}
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="mb-2">
                  <SidebarMenuButton asChild className="flex items-center gap-2 hover:bg-[#DBF8FA]">
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon className="text-[#62636C]" />
                      <p className="capitalize text-gray-500 font-poppins font-medium">
                        {item.title}
                      </p>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/* Footer */}
      <SidebarFooter className="overfloww-hidden">
        <SidebarMenu className={"flex flex-row "}>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="transition-all duration-200 hover:translate-x-2 hover:text-primary hover:bg-transparent  text-[#62636C] rounded-md"
            >
              <div
               
                className="flex items-center gap-2 text-gray-400  font-medium text-sm capitalize"
              >
                <MdOutlineLogout className="text-[#62636C]" />
                <button onClick={handleLogOut}>logout</button>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default SurveySidebar;
