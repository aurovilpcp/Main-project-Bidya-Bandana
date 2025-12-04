import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Tags, Bell, Users, TrendingUp, Download } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', downloads: 40 },
  { name: 'Tue', downloads: 30 },
  { name: 'Wed', downloads: 65 },
  { name: 'Thu', downloads: 45 },
  { name: 'Fri', downloads: 80 },
  { name: 'Sat', downloads: 55 },
  { name: 'Sun', downloads: 20 },
];

const STAT_CARDS = [
  { title: "Total Study Materials", value: "142", icon: BookOpen, change: "+12% from last month" },
  { title: "Active Categories", value: "8", icon: Tags, change: "No change" },
  { title: "Total Notices", value: "24", icon: Bell, change: "+4 new this week" },
  { title: "Total Downloads", value: "5.2k", icon: Download, change: "+18% from last month" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {STAT_CARDS.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground font-sans">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Chart */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Weekly Download Activity</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="name" 
                    stroke="hsl(var(--muted-foreground))" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false}
                    tickFormatter={(value) => `${value}`}
                  />
                  <Tooltip 
                    cursor={{fill: 'hsl(var(--muted)/0.4)'}}
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      borderColor: 'hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                  />
                  <Bar 
                    dataKey="downloads" 
                    fill="hsl(var(--primary))" 
                    radius={[4, 4, 0, 0]} 
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {[
                { user: "Admin", action: "Uploaded 'Physics Notes'", time: "2 hours ago" },
                { user: "Admin", action: "Posted 'Holiday Notice'", time: "5 hours ago" },
                { user: "System", action: "Backup completed", time: "1 day ago" },
                { user: "Admin", action: "Updated 'Math Syllabus'", time: "2 days ago" },
              ].map((item, i) => (
                <div key={i} className="flex items-center">
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">{item.action}</p>
                    <p className="text-sm text-muted-foreground">
                      by {item.user} • {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
