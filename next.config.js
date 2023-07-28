/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // stand alone true for serverless
  
  output: "standalone",
  env: {
    DB_URL: `mongodb+srv://xxx:xxx@xxx.xxx.mongodb.net/xxx`,
    RABBIT_MQ_USER: "guest",
    RABBIT_MQ_PASSWORD: "guest",
  },
};

module.exports = nextConfig;
