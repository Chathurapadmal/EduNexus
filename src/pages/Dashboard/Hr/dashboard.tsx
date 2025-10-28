function StatCard({
  title,
  value,
  tone = "ok",
}: {
  title: string;
  value: string;
  tone?: "ok" | "warn" | "danger";
}) {
  const toneClass =
    tone === "ok"
      ? "badge-ok"
      : tone === "warn"
      ? "badge-warn"
      : "badge-danger";
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between">
        <span className={`badge ${toneClass}`}>{title}</span>
        <span className="text-text-secondary text-xs">Last 30d</span>
      </div>
      <div className="mt-3 text-3xl font-semibold">{value}</div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Dashboard</h2>

      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Open Reqs" value="12" />
        <StatCard title="Time to Hire" value="18d" tone="warn" />
        <StatCard title="Offer Accept %" value="92%" />
        <StatCard title="Payroll Errors" value="1" tone="danger" />
      </section>

      <section className="card p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Recent Requisitions</h3>
          <button className="btn-primary">New Requisition</button>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Dept</th>
                <th>Budget</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Software Engineer</td>
                <td>IT</td>
                <td>LKR 250,000</td>
                <td>
                  <span className="badge badge-pending">Pending</span>
                </td>
              </tr>
              <tr>
                <td>Accountant</td>
                <td>Finance</td>
                <td>LKR 180,000</td>
                <td>
                  <span className="badge badge-ok">Approved</span>
                </td>
              </tr>
              <tr>
                <td>HR Assistant</td>
                <td>HR</td>
                <td>LKR 120,000</td>
                <td>
                  <span className="badge badge-danger">Rejected</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
