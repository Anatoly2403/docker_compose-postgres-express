export interface I_PayloadWithId {
  id: number;
}

export interface I_PayloadWithTitle {
  title: string;
}

export interface I_Todo extends I_PayloadWithId, I_PayloadWithTitle {}
