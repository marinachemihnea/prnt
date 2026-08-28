import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
      botcheck?: boolean;
    };

    if (body.botcheck) {
      return NextResponse.json({
        ok: true,
        message: "Mesajul a fost trimis. Te contactăm în curând.",
      });
    }

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, message: "Completează numele, emailul și mesajul." },
        { status: 400 },
      );
    }

    const accessKey = process.env.WEB3FORMS_KEY;
    if (!accessKey) {
      return NextResponse.json(
        {
          ok: false,
          message: "Formularul nu este configurat. Încearcă mai târziu.",
        },
        { status: 500 },
      );
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

    const data = (await response.json().catch(() => null)) as {
      success?: boolean;
    } | null;

    if (!response.ok || !data?.success) {
      return NextResponse.json(
        { ok: false, message: "A apărut o eroare. Încearcă din nou." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Mesajul a fost trimis. Te contactăm în curând.",
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "A apărut o eroare. Încearcă din nou." },
      { status: 500 },
    );
  }
}
