-- CreateEnum
CREATE TYPE "ContentFormat" AS ENUM ('MARKDOWN', 'HTML', 'JSON', 'TEXT');

-- CreateEnum
CREATE TYPE "MediaType" AS ENUM ('IMAGE', 'VIDEO', 'CODE', 'AUDIO', 'DOCUMENT', 'OTHER');

-- DropForeignKey
ALTER TABLE "categories" DROP CONSTRAINT "categories_parentId_fkey";

-- DropForeignKey
ALTER TABLE "invoices" DROP CONSTRAINT "invoices_clientId_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_clientId_fkey";

-- DropForeignKey
ALTER TABLE "teams" DROP CONSTRAINT "teams_parentTeamId_fkey";

-- CreateTable
CREATE TABLE "CategoriesPost" (
    "id" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "label" TEXT NOT NULL,
    "img" TEXT,
    "parentId" TEXT,

    CONSTRAINT "CategoriesPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tag_blogs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tag_blogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "posts" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "PostView" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "img" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "metaTitle" TEXT NOT NULL,
    "metaDescription" TEXT NOT NULL,
    "canonicalUrl" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contents" (
    "id" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "format" "ContentFormat" NOT NULL DEFAULT 'MARKDOWN',
    "postId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "contents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medias" (
    "id" TEXT NOT NULL,
    "caption" TEXT,
    "type" "MediaType" NOT NULL,
    "url" TEXT NOT NULL,
    "contentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "medias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "responses" (
    "id" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "parentId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "responses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "like_posts" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "like_posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post_categories" (
    "postId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "post_categories_pkey" PRIMARY KEY ("postId","categoryId")
);

-- CreateTable
CREATE TABLE "post_tags" (
    "postId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,

    CONSTRAINT "post_tags_pkey" PRIMARY KEY ("postId","tagId")
);

-- CreateIndex
CREATE INDEX "CategoriesPost_parentId_order_idx" ON "CategoriesPost"("parentId", "order");

-- CreateIndex
CREATE UNIQUE INDEX "CategoriesPost_parentId_label_key" ON "CategoriesPost"("parentId", "label");

-- CreateIndex
CREATE UNIQUE INDEX "posts_slug_key" ON "posts"("slug");

-- CreateIndex
CREATE INDEX "posts_createdAt_idx" ON "posts"("createdAt");

-- CreateIndex
CREATE INDEX "contents_postId_idx" ON "contents"("postId");

-- CreateIndex
CREATE UNIQUE INDEX "contents_postId_order_key" ON "contents"("postId", "order");

-- CreateIndex
CREATE INDEX "medias_contentId_idx" ON "medias"("contentId");

-- CreateIndex
CREATE INDEX "responses_postId_idx" ON "responses"("postId");

-- CreateIndex
CREATE INDEX "responses_parentId_idx" ON "responses"("parentId");

-- CreateIndex
CREATE INDEX "like_posts_postId_idx" ON "like_posts"("postId");

-- CreateIndex
CREATE INDEX "like_posts_userId_idx" ON "like_posts"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "like_posts_postId_userId_key" ON "like_posts"("postId", "userId");

-- CreateIndex
CREATE INDEX "post_categories_categoryId_idx" ON "post_categories"("categoryId");

-- CreateIndex
CREATE INDEX "post_categories_postId_idx" ON "post_categories"("postId");

-- CreateIndex
CREATE INDEX "post_tags_tagId_idx" ON "post_tags"("tagId");

-- CreateIndex
CREATE INDEX "post_tags_postId_idx" ON "post_tags"("postId");

-- AddForeignKey
ALTER TABLE "teams" ADD CONSTRAINT "teams_parentTeamId_fkey" FOREIGN KEY ("parentTeamId") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesPost" ADD CONSTRAINT "CategoriesPost_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "CategoriesPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contents" ADD CONSTRAINT "contents_postId_fkey" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contents" ADD CONSTRAINT "contents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medias" ADD CONSTRAINT "medias_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "contents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "responses" ADD CONSTRAINT "responses_postId_fkey" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "responses" ADD CONSTRAINT "responses_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "responses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "responses" ADD CONSTRAINT "responses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "like_posts" ADD CONSTRAINT "like_posts_postId_fkey" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "like_posts" ADD CONSTRAINT "like_posts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post_categories" ADD CONSTRAINT "post_categories_postId_fkey" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post_categories" ADD CONSTRAINT "post_categories_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "CategoriesPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post_tags" ADD CONSTRAINT "post_tags_postId_fkey" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post_tags" ADD CONSTRAINT "post_tags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "tag_blogs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoices" ADD CONSTRAINT "invoices_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
