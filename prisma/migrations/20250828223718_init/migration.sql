-- CreateTable
CREATE TABLE "public"."emails" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "isIOS" BOOLEAN NOT NULL DEFAULT false,
    "adType" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "emails_pkey" PRIMARY KEY ("id")
);
