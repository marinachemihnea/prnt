"use server";

export type ContactState = {
  ok: boolean;
  message: string;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  if (formData.get("botcheck")) {
    return { ok: true, message: "Mesajul a fost trimis. Te contactăm în curând." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { ok: false, message: "Completează numele, emailul și mesajul." };
  }

  const accessKey = process.env.WEB3FORMS_KEY;
  if (!accessKey) {
    return { ok: false, message: "Formularul nu este configurat. Încearcă mai târziu." };
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      name,
      email,
      phone,
      message,
      subject: `Mesaj nou de pe PRNT — ${name}`,
    }),
  });

  const data = (await response.json()) as { success?: boolean };

  if (!response.ok || !data.success) {
    return { ok: false, message: "A apărut o eroare. Încearcă din nou." };
  }

  return { ok: true, message: "Mesajul a fost trimis. Te contactăm în curând." };
}
