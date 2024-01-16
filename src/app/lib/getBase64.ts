// import fs from 'node:fs/promises'
// import path from 'path'
// import { getPlaiceholder } from 'plaiceholder'

// export async function getBase64(publicFilename: string) {
//   try {
//     const fileName = path.join(process.cwd(), 'public', publicFilename)
//     const file = await fs.readFile(fileName)
//     // const { base64 } = await getPlaiceholder(file)
//     return base64
//   } catch (e) {
//     console.log(e instanceof Error ? e.message : 'Placeholder generation error')
//     return undefined
//   }
// }
export async function getBase64(publicFilename: string) {
  return undefined
}
