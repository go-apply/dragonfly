import { ApiResponse, Project } from '@api';

export const getProjects: ApiResponse<Project[]> = {
  ok: true,
  data: [
    {
      id: '08d6c5e7-6100-c770-61c3-834f6474a77b',
      name: 'Tarantula',
      description:
        'A web crawler slackbot that tracks creation of new internships in greenhouse job boards.',
      launchDate: new Date(),
      repositoryUrl: 'https://github.com/go-apply/tarantula',
      communicationPlatformUrl: 'https://slack.com',
      lookingForMembers: false,
      communicationPlatform: 'slack',
      projectTechnologies: [
        {
          name: 'go',
          projectId: '08d6c5e7-6100-c770-61c3-834f6474a77b',
        },
        {
          name: 'slack-api',
          projectId: '08d6c5e7-6100-c770-61c3-834f6474a77b',
        },
      ],
      projectUsers: [
        {
          id: '08d6c5e7-618f-0a0b-f6bb-b8600e4e4c53',
          projectId: '08d6c5e7-6100-c770-61c3-834f6474a77b',
          userId: '08d6c5c9-b575-f71e-dc9a-2e6dfeb94f96',
          username: 'unicorn1',
          isOwner: false,
        },
        {
          id: '08d6c5e7-618f-0a0b-f6bb-b8600e4e4c54',
          projectId: '08d6c5e7-6100-c770-61c3-834f6474a77b',
          userId: '08d6c5c9-e4c4-46a6-63bc-c68a81a8154f',
          username: 'unicorn91',
          isOwner: false,
        },
        {
          id: '08d6c5e7-618f-0a0b-f6bb-b8600e4e4c55',
          projectId: '08d6c5e7-6100-c770-61c3-834f6474a77b',
          userId: '08d6c5c9-de33-4d5a-1451-69111480ee74',
          username: 'unicorn77',
          isOwner: false,
        },
        {
          id: '08d6c5e7-618f-0a0b-f6bb-b8600e4e4c56',
          projectId: '08d6c5e7-6100-c770-61c3-834f6474a77b',
          userId: '08d6c5c9-e007-d7b8-235d-165330930563',
          username: 'unicorn81',
          isOwner: false,
        },
        {
          id: '08d6c5e7-618f-0a0b-f6bb-b8600e4e4c57',
          projectId: '08d6c5e7-6100-c770-61c3-834f6474a77b',
          userId: '08d6c5c9-df95-b688-b09b-243fd0e32dfe',
          username: 'unicorn80',
          isOwner: false,
        },
      ],
    },
    {
      id: '08d6c75d-2425-3fd6-6ad0-463de001630c',
      name: 'Dragonfly',
      description:
        "Dragonfly is the frontend landing page for the team (what you're on right now).",
      launchDate: new Date(),
      repositoryUrl: 'https://github.com/go-apply/dragonfly',
      communicationPlatformUrl: 'https://slack.com',
      lookingForMembers: false,
      communicationPlatform: 'slack',
      projectTechnologies: [
        {
          name: 'html',
          projectId: '08d6c75d-2425-3fd6-6ad0-463de001630c',
        },
        {
          name: 'css',
          projectId: '08d6c75d-2425-3fd6-6ad0-463de001630c',
        },
        {
          name: 'javascript',
          projectId: '08d6c75d-2425-3fd6-6ad0-463de001630c',
        },
        {
          name: 'gatsby',
          projectId: '08d6c75d-2425-3fd6-6ad0-463de001630c',
        },
        {
          name: 'nodejs',
          projectId: '08d6c75d-2425-3fd6-6ad0-463de001630c',
        },
      ],
      projectUsers: [
        {
          id: '08d6c75d-246a-6d19-0fe0-140fa505e75a',
          projectId: '08d6c75d-2425-3fd6-6ad0-463de001630c',
          userId: '08d6c5c9-b5f7-6966-79a7-c982b5dcc6ad',
          username: 'unicorn2',
          isOwner: false,
        },
        {
          id: '08d6cef5-c1bc-69b2-e763-03ff3daf751e',
          projectId: '08d6c75d-2425-3fd6-6ad0-463de001630c',
          userId: '08d6cef0-bc48-16ce-1300-6e395b3b3eba',
          username: 'unicorn167',
          isOwner: false,
        },
        {
          id: '08d6cff3-cbb1-69d0-8b8c-edb405c931c9',
          projectId: '08d6c75d-2425-3fd6-6ad0-463de001630c',
          userId: '08d6c5c9-e4c4-46a6-63bc-c68a81a8154f',
          username: 'unicorn91',
          isOwner: false,
        },
        {
          id: '08d6dba5-45bb-d5db-be08-c7c8452e2cd4',
          projectId: '08d6c75d-2425-3fd6-6ad0-463de001630c',
          userId: '08d6db86-757b-fa77-3013-0cc556222670',
          username: 'unicorn207',
          isOwner: false,
        },
      ],
    },
  ],
};
