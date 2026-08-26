import { useSecretsStore } from "@/entities/secrets";

export function useCreateSecret() {
  const secretsStore = useSecretsStore();

  function createSecret(payload) {
    const secret = {
      id: crypto.randomUUID(),
      nomJoueur: payload.nomJoueur,
      secret: payload.secret,
      isFauxSecret: payload.isFauxSecret,
    };

    secretsStore.addSecret(secret);
  }

  return {
    createSecret,
  };
}
