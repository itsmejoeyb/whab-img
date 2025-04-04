import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { query } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";

export default async function Home() {
  const { data } = await sanityFetch({ query: query });

  return (
    <div className="pt-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-screen px-8">
        <ul className="space-y-32 max-w-screen">
          {data.map((property: { address: string; gallery: [any] }) => (
            <li className="flex flex-col gap-4" key={property.address}>
              <p className="text-3xl font-bold">{property.address}</p>
              <div className="flex gap-2 flex-wrap">
                {property.gallery?.map((img) => (
                  <div key={img._key} className="w-80 h-44">
                    <Image
                      width={320}
                      height={180}
                      src={
                        urlForImage(img)
                          ?.height(180)
                          .width(320)
                          .auto("format")
                          .url() as string
                      }
                      alt="property image"
                    />
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
