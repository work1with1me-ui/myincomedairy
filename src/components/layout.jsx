// import React from "react"
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupLabel,
//   SidebarGroupContent,
//   SidebarMenu,
//   SidebarMenuItem,
//   SidebarMenuButton,
//   SidebarFooter,
//   SidebarHeader,
// } from "@/components/ui/sidebar"

// import { Home, FileText, Book, User } from "lucide-react"

// export default function SidebarLayout({ children }) {
//   return (
//     <div className="flex h-screen">
//       <Sidebar collapsible="icon">
//         <SidebarHeader>
//           <div className="flex items-center gap-2">
//             <img
//               src="/logo.png"
//               alt="logo"
//               className="w-8 h-8 rounded"
//             />
//             <div>
//               <p className="font-bold text-sm">Acme Inc</p>
//               <p className="text-xs text-muted-foreground">Enterprise</p>
//             </div>
//           </div>
//         </SidebarHeader>

//         <SidebarContent>
//           <SidebarGroup>
//             <SidebarGroupLabel>Platform</SidebarGroupLabel>
//             <SidebarGroupContent>
//               <SidebarMenu>
//                 <SidebarMenuItem>
//                   <SidebarMenuButton>
//                     <Home className="mr-2 h-4 w-4" />
//                     Playground
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//                 <SidebarMenuItem>
//                   <SidebarMenuButton>
//                     <FileText className="mr-2 h-4 w-4" />
//                     Models
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//                 <SidebarMenuItem>
//                   <SidebarMenuButton>
//                     <Book className="mr-2 h-4 w-4" />
//                     Documentation
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               </SidebarMenu>
//             </SidebarGroupContent>
//           </SidebarGroup>
//         </SidebarContent>

//         <SidebarFooter>
//           <div className="flex items-center gap-2">
//             <img
//               src="/user.jpg"
//               alt="user"
//               className="w-8 h-8 rounded-full"
//             />
//             <div>
//               <p className="font-medium text-sm">shadcn</p>
//               <p className="text-xs text-muted-foreground">m@example.com</p>
//             </div>
//           </div>
//         </SidebarFooter>
//       </Sidebar>

//       {/* Right Content Area */}
//       <main className="flex-1 p-6 bg-muted/10">{children}</main>
//     </div>
//   )
// }

import IconSidebar from "@/components/icon-sidebar";
import AppSidebar from "@/components/App-sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <IconSidebar />
      <AppSidebar />

      <main className="flex-1 bg-neutral-900 text-white p-6">
        {children}
      </main>
    </div>
  );
}

