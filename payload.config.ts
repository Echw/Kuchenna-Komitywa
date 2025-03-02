// storage-adapter-import-placeholder
import { vercelPostgresAdapter } from "@payloadcms/db-vercel-postgres";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import path from "path";
import sharp from "sharp";

import { Users } from "@/collections/Users";
import { Media } from "@/collections/Media";
import { Homepage } from "@/globals/homepage";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

console.log("TEST", filename, dirname);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media],
  globals: [Homepage],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "src/types/payload-types.ts"),
  },
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || "",
    },
  }),
  sharp,
  plugins: [
    vercelBlobStorage({
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || "",
    }),
  ],
});
