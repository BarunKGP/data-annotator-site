import { EmailTemplate } from "../../components/emailTemplate";
import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_KEY);
const resend = new Resend("re_Ro9FtCSa_FHLSiRAxhNxKwpjQk1j2LkG9");

export default async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  try {
    console.log("Forming email request");
    const logs = req.body;
    const data = await resend.emails.send({
      from: "CEP experiments <cep-data@data-annotator.barundas.com>",
      to: ["barun.das@dbmi.emory.edu"],
      subject: "CEP Benchmark data collection 12/08/23",
      react: EmailTemplate({ logs }),
    });

    console.log("data", data);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json(error);
  }
};
