import {
  ClipboardList,
  Dumbbell,
  MessageSquare,
  Users,
  Plus,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    title: "Exercises",
    value: 156,
    change: "+6 this week",
    icon: Dumbbell,
    href: "/admin/exercises",
  },
  {
    title: "Routines",
    value: 24,
    change: "+2 this week",
    icon: ClipboardList,
    href: "/admin/routines",
  },
  {
    title: "Users",
    value: "2,842",
    change: "+38 this week",
    icon: Users,
    href: "/admin/users",
  },
  {
    title: "Reviews",
    value: 418,
    change: "+12 this week",
    icon: MessageSquare,
    href: "/admin/reviews",
  },
];

const activity = [
  {
    title: "New Exercise",
    subtitle: "Bench Press",
    time: "10 minutes ago",
    color: "bg-lime-400",
  },
  {
    title: "New Review",
    subtitle: "Push Day Routine",
    time: "45 minutes ago",
    color: "bg-yellow-400",
  },
  {
    title: "New User",
    subtitle: "John Carter",
    time: "Yesterday",
    color: "bg-sky-400",
  },
];

const actions = [
  {
    title: "Add Exercise",
    href: "/admin/exercises/create",
  },
  {
    title: "Create Routine",
    href: "/admin/routines/create",
  },
  {
    title: "Manage Users",
    href: "/admin/users",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      {/* HEADER */}

      <section>
        <p className="text-sm uppercase tracking-[4px] text-lime-400">
          Dashboard
        </p>

        <h1 className="mt-3 text-4xl font-black text-white">
          Welcome Back 👋
        </h1>

        <p className="mt-3 max-w-2xl text-gray-400">
          Here's a quick overview of what's happening in your gym
          application.
        </p>
      </section>

      {/* STATS */}

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((card) => {
          const Icon = card.icon;

          return (
            <Link
              key={card.title}
              href={card.href}
              className="group rounded-3xl border border-white/10 bg-[#181818] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/30"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-2xl bg-lime-400/10 p-3 text-lime-400">
                  <Icon size={24} />
                </div>

                <ArrowRight
                  size={18}
                  className="text-gray-500 transition group-hover:translate-x-1 group-hover:text-lime-400"
                />
              </div>

              <h3 className="mt-6 text-gray-400">
                {card.title}
              </h3>

              <p className="mt-2 text-4xl font-black text-white">
                {card.value}
              </p>

              <p className="mt-2 text-sm text-lime-400">
                {card.change}
              </p>
            </Link>
          );
        })}
      </section>

      {/* ACTIVITY + ACTIONS */}

      <section className="grid gap-8 lg:grid-cols-3">
        {/* RECENT ACTIVITY */}

        <div className="rounded-3xl border border-white/10 bg-[#181818] p-8 lg:col-span-2">
          <h2 className="text-2xl font-bold text-white">
            Recent Activity
          </h2>

          <div className="mt-8 space-y-6">
            {activity.map((item) => (
              <div
                key={item.title + item.subtitle}
                className="flex items-start gap-4"
              >
                <span
                  className={`mt-2 h-3 w-3 rounded-full ${item.color}`}
                />

                <div className="flex-1 border-b border-white/5 pb-5 last:border-none">
                  <h3 className="font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-gray-400">
                    {item.subtitle}
                  </p>

                  <span className="mt-2 block text-sm text-gray-500">
                    {item.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* QUICK ACTIONS */}

        <div className="rounded-3xl border border-white/10 bg-[#181818] p-8">
          <h2 className="text-2xl font-bold text-white">
            Quick Actions
          </h2>

          <div className="mt-8 space-y-4">
            {actions.map((action) => (
              <Link
                key={action.title}
                href={action.href}
                className="flex items-center justify-between rounded-2xl bg-[#222222] p-5 transition hover:bg-lime-400 hover:text-black"
              >
                <div className="flex items-center gap-3">
                  <Plus size={18} />
                  {action.title}
                </div>

                <ArrowRight size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}