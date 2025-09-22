import { Card } from '@/components/ui/Card';

interface MetricCardProps {
  label: string;
  value: string | number;
}

export function MetricCard({ label, value }: MetricCardProps) {
  return (
    <Card className="p-4">
      <p className="text-sm text-neutral-600">{label}</p>
      <p className="text-2xl font-semibold">{value}</p>
    </Card>
  );
}
