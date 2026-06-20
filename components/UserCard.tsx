interface UserCardProps {
  totalUsers: number;
}

export default function UserCard({
  totalUsers
}: UserCardProps) {
  return (
    <div className="dashboard-card user-card">

      <div className="card-left">
        <h3>Users</h3>
        <h1>{totalUsers}</h1>
        <p>Registered Users</p>
      </div>

      <div className="card-icon">
        👤
      </div>

    </div>
  );
}