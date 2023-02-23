const nut = require('@nut-tree/nut-js')
const nutocr = require('@nut-tree/plugin-ocr')
require('@nut-tree/nl-matcher')

nut.screen.config.ocrConfidence = 0.8
nut.screen.config.confidence = 0.8

Promise.resolve().then(async () => {
	await nutocr.preloadLanguages([nutocr.Language.English, nutocr.Language.French])

	const res = await nut.screen.find(nut.singleWord('test'), {
		providerData: {
			lang: [nutocr.Language.English],
			caseSensitive: false,
			partialMatch: false,
		},
	})

	console.log('res', res)
})
