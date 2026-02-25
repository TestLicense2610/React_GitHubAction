/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  // Thêm dòng này để khớp với tên Repository trên GitHub của bạn
  basePath: '/React_GitHubAction', 
  
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig