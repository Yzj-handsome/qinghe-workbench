/**
 * 青禾工作台 · 云端同步配置（部署前填写一次，所有设备共用）
 *
 * 使用 Supabase：
 * 1. 在 https://supabase.com 新建项目，进入 SQL Editor 执行：
 *
 *    create table public.qinghe_workspace (
 *      id text primary key,
 *      data jsonb not null,
 *      version bigint not null default 0,
 *      updated_at timestamptz not null default now()
 *    );
 *    alter table public.qinghe_workspace enable row level security;
 *    create policy "qinghe anon read" on public.qinghe_workspace
 *      for select using (true);
 *    create policy "qinghe anon insert" on public.qinghe_workspace
 *      for insert with check (true);
 *    create policy "qinghe anon update" on public.qinghe_workspace
 *      for update using (true) with check (true);
 *
 * 2. 在 Project Settings → API 复制 Project URL 和 anon public key，填到下面。
 * 3. autoPull：true = 打开网页时自动从云端拉取。
 *
 * 说明：anon Key 是 Supabase 面向浏览器的公开密钥，按上面的策略，任何拿到
 * URL 和 Key 的人都能读写这一张表。请只放演示数据；正式使用请开启 Supabase
 * 登录认证，并把策略改为仅 authenticated 可读写。
 */
window.QINGHE_SYNC = {
  supabaseUrl: 'https://cjbskxfuxxxfrarxauut.supabase.co',
  supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqYnNreGZ1eHh4ZnJhcnhhdXV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIzMDUzODEsImV4cCI6MjEwNzg4MTM4MX0.OqcfK-iV-vJbcbe5jv8O-PLmOjZGuj9K7VgGf3C9xvA',
  autoPull: true
};
