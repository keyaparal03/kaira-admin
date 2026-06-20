interface Props {
  title: string;
  count: number;
  icon: string;
  cardClass: string;
}

export default function DashboardCard({
  title,
  count,
  icon,
  cardClass
}: Props) {
  return (
    <div
      className={`dashboard-card ${cardClass}`}
    >
      <div className="card-content">
        <h3>{title}</h3>
        <h1>{count}</h1>
        <p>Total {title}</p>
      </div>

      <div className="card-icon">
        {icon}
      </div>
    </div>
  );
}