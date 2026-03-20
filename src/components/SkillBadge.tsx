export default function SkillBadge({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
      {name}
    </span>
  );
}
