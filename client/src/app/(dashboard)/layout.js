export default function DashboardLayout({ children }) {
  return (
    <div className="flex overflow-auto bg-[var(--secondary-background)]">
      <main>{children}</main>
    </div>
  );
}