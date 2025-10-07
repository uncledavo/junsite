'use client';

import React from 'react';
import Image from 'next/image';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

type FaqItem = {
  title: string;
  linkHref?: string;
  linkText?: string;
  embedHtml?: string; // raw HTML from SoundCloud/YouTube snippets
  description?: string;
  descriptionHtml?: string; // optional HTML description when links/markup are needed
  tracklistImageSrc?: string;
  tracklistImageAlt?: string;
  tracklistNote?: string; // e.g., "No Tracklist"
};

type FaqDisclosureProps = {
  faqs: FaqItem[];
};

export default function FaqDisclosure({ faqs }: FaqDisclosureProps) {
  return (
    <dl className="divide-y divide-gray-900/10 dark:divide-white/10">
      {faqs.map((faq) => (
        <Disclosure key={faq.title} as="div" className="py-6 first:pt-0 last:pb-0">
          {({ open }) => (
            <>
              <dt className="font-normal">
                <DisclosureButton className="group flex w-full items-start justify-between text-left text-white">
                  <span className="text-base/7 font-semibold">{faq.title}</span>
                  <span className="ml-6 flex h-7 items-center">
                    {open ? (
                      <MinusIcon aria-hidden="true" className="size-6" />
                    ) : (
                      <PlusIcon aria-hidden="true" className="size-6" />
                    )}
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" className="mt-4 pr-0 sm:pr-12">
                {faq.linkHref && (
                  <p className="text-sm/6 mb-3 text-white">
                    <a
                      href={faq.linkHref}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="underline underline-offset-2 decoration-white/50 hover:opacity-80"
                    >
                      {faq.linkText ?? faq.linkHref}
                    </a>
                  </p>
                )}
                {faq.embedHtml && (
                  <div
                    className="[&>*]:w-full [&>iframe]:w-full [&>iframe]:max-w-full"
                    // Raw HTML embed provided by platforms
                    dangerouslySetInnerHTML={{ __html: faq.embedHtml }}
                  />
                )}
                {faq.descriptionHtml ? (
                  <div
                    className="mt-4 text-base/7 text-white/90 whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: faq.descriptionHtml }}
                  />
                ) : faq.description ? (
                  <p className="mt-4 text-base/7 text-white/90 whitespace-pre-line">
                    {faq.description}
                  </p>
                ) : null}
                {faq.tracklistImageSrc ? (
                  <div className="mt-4">
                    <Image
                      src={faq.tracklistImageSrc}
                      alt={faq.tracklistImageAlt ?? 'Tracklist image'}
                      width={1600}
                      height={1200}
                      sizes="50vw"
                      className="rounded-md shadow-md h-auto w-1/2"
                    />
                  </div>
                ) : faq.tracklistNote ? (
                  <p className="mt-4 text-sm text-gray-300 italic">{faq.tracklistNote}</p>
                ) : null}
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      ))}
    </dl>
  );
}


