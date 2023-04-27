
export type SomQuest = {
  id: string;
  name: string;
  description: string;
  steps: SomQuestStep[];
}

export type SomQuestStep = {
  id: string;
  name: string;
  description: string;
}
