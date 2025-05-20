import { AppSidebar } from "@/components/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap h-full">
      <div className="w-4/12 max-w-76 min-w-fit h-full">
        <AppSidebar />
      </div>
      <div className="w-8/12 grow h-full">
        Content
      </div>
    </div>
  );
}
