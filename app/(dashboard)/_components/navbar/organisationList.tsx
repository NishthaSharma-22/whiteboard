"use client";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useOrganizationList } from "@clerk/nextjs";

export default function OrganisationList() {
  const { userMemberships } = useOrganizationList({
    userMemberships: { infinite: true },
  });
  if (!userMemberships.data?.length) return null;
  return (
    <>
      <ul>
        {userMemberships.data?.map((member) => (
          <p key={member.organization.id}>
            <DropdownMenuItem>{member.organization.name}</DropdownMenuItem>
          </p>
        ))}
      </ul>
    </>
  );
}
