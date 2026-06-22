import Sidebar from "@/components/admin/Sidebar"

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen flex bg-gray-50 dark:bg-[#0a0a0a]">
            {/* Desktop Sidebar */}
            <div className="hidden sm:block w-64 md:w-72 shrink-0 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111111]">
                <Sidebar />
            </div>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col items-center min-w-0 overflow-y-auto pb-20 sm:pb-0 h-screen">
                <div className="flex-1 p-4 sm:p-6 lg:p-8 w-full max-w-5xl">
                    {children}
                </div>
            </main>

            {/* Mobile Bottom Navigation */}
            <div className="sm:hidden fixed bottom-0 left-0 right-0 border-t border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-[#111111]/80 backdrop-blur-lg z-50 overflow-x-auto">
                <Sidebar mobile />
            </div>
        </div>
    )
}

export default layout