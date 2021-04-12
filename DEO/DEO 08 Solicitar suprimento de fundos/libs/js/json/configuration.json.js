Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DEO] 08 Solicitar suprimento de fundos","publishDate":"12/04/2021 11:29:07","pages":[{"id":"feae2b79-a973-48f9-94a2-34a799d78b84","name":"[DEO] 08 Solicitar suprimento de fundos","version":"1.0","author":"michelo","image":"files\\diagrams\\DEO]_08_Solicitar_suprimento_de_fundos.png","isSubprocessPage":false,"elements":[{"id":"ad17bb4f-d60c-45a6-b305-09a7eeae660e","name":"[DEO] 08 Solicitar suprimento de fundos","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":2186.7,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"766ac118-2a04-4204-85a0-5c623d8ac08f","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":123.0,"y":54.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"04f20c61-9411-4920-ba86-27254d6b908a","name":"Abrir processo de  suprimento de fundos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":240.5,"y":39.0}],"radius":0.0,"height":60.0,"width":122.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e634cc72-4f21-448f-99f8-b7fca887fb7e","name":"Incluir documento 037 -  Solicitação de  suprimento de fundos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":224.0,"y":133.0}],"radius":0.0,"height":60.0,"width":155.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"26e1ab0e-0e36-4d4d-bc80-04c4d793a0c9","name":"Incluir documento 836 - Disponibilidade orçamentária","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":113.0,"y":1162.0}],"radius":0.0,"height":60.0,"width":118.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d94cc773-4d8e-4509-a434-0df67905d34f","name":"Analisar solicitação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":220.0,"y":864.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d247abce-c243-4e1c-a500-eef5de0962b0","name":"Incluir documento 036 - Análise e deliberação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":213.0,"y":748.0}],"radius":0.0,"height":63.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2c6e324d-0627-47b1-8d7b-384030cdb007","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":392.0,"y":759.5}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"d228c544-2c81-4b74-bb1d-6af3eaece97a","name":"incluir documento   986 - Nota de empenho","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":558.5,"y":1122.0}],"radius":0.0,"height":60.0,"width":109.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1dc12192-3704-4699-9c20-63a9bd6733d5","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":751.0,"y":1132.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"8fbdf8a2-3456-4b18-9421-0eea89090bd2","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":756.0,"y":1473.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"c37e80ea-fe6b-48d5-9444-c1da6514a934","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":756.0,"y":768.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"524abd5b-69bd-4c4b-bb9f-d660901237a4","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":832.0,"y":1137.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"ea42304f-7102-4259-b389-846057ac7df7","name":"  Incluir documento               989-Apropriação/ Liquidação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":890.0,"y":1467.0}],"radius":0.0,"height":85.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"82f06a62-e2bc-40c5-ad6d-d808c1d700fc","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":915.0,"y":1592.11121}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"460a82a5-7cd1-473e-97ff-9446f06a0631","name":"Aguardar pedidos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":954.0,"y":377.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"44a8ffe9-366e-4c90-bf18-8893a3315320","name":"Aquisição de insumos alimentícios?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":979.0,"y":257.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"822cca4a-610b-46a0-97b4-662d807fead0","name":"Incluir documento  073 - Autorização uso de suprimento fundos geral","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1065.0,"y":135.0}],"radius":0.0,"height":80.0,"width":119.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f1d51a08-0cc7-4634-8958-8ac2e3ef70e6","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1309.0,"y":581.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"b2c84eb0-5283-4250-a2e0-8e9ebdd75b53","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1244.0,"y":771.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"fca1f73b-9a0d-49c9-a128-1f3cba3ab5aa","name":"Realizar compra","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1388.0,"y":338.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fe19dba9-4449-4e57-8295-7ebd4f8c4c58","name":"Incluir em PDF nota fiscal da compra realizada","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1383.0,"y":242.0}],"radius":0.0,"height":68.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3f1cb7b8-1afc-40dc-b1ba-30ec6eff4b44","name":"Prazo do suprimento de fundos  encerrado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1413.0,"y":174.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"22dc1c4b-61bd-4dea-aa83-45546eebe66c","name":"Incluir documento 041 - Prestação de contas de SP - final","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1593.0,"y":151.0}],"radius":0.0,"height":87.0,"width":125.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5179defd-269b-4355-8dbc-3812f5a9c40e","name":"Realizar análise  da prestação de contas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1784.0,"y":1563.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"90f4ec87-3e28-4afd-bca7-ce71a38e11e5","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":2010.0,"y":1573.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"56e4288f-a5b9-4a1b-be7e-8ba12df5117c","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1980.0,"y":1452.0}],"radius":0.0,"height":65.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0a882839-6b06-4ca2-b5e1-8f3557588751","name":"Realizar as devidas correções","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1985.0,"y":98.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"24d4897e-8300-4578-892a-20bf6b04aa11","name":"Incluir documento 191 - Parecer","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1988.0,"y":1725.0}],"radius":0.0,"height":61.0,"width":84.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a1a644a0-0d39-497a-8681-88a187034734","name":"Foram realizadas aquisições em processos não relacionados a este de suprimento de fundos?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":2233.0,"y":1735.5}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"1dbbd8c5-d2ac-4fb7-b5bb-6c1b091e4d3a","name":"Anexar processos de aquisição","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2349.0,"y":1725.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"421cfa50-058a-4276-b129-e752b01db4cb","name":"Incluir documento 036 -  Análise e deliberação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2339.5,"y":767.0}],"radius":0.0,"height":82.0,"width":109.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"731754c1-798e-46d4-b0f6-6789f6e3e177","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2496.0,"y":1505.0}],"radius":0.0,"height":60.0,"width":119.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"96bdad76-20ac-4830-8a6b-430918d23aba","name":"É necessária a anulação de saldos não utilizados?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":2659.0,"y":1515.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"7f87449a-3ef4-43a4-ad61-0e773cb0753b","name":"Executar anulação do empenho ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2711.0,"y":1099.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7980e9d7-80c7-4ec7-956a-1404fb14e9d6","name":"Incluir documento 986 -  Nota de empenho","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2696.0,"y":1228.0}],"radius":0.0,"height":70.0,"width":120.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ef2aaa71-8ac3-48fe-8a84-66a83177cadd","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":2895.0,"y":1243.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"fe6fca66-5297-4b17-8548-e23ab5e791eb","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":2900.0,"y":871.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"d44b0dd4-7e5c-49e8-b149-4b910ccab2ff","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":2900.0,"y":1483.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"5e601b41-1d91-44c4-a58d-d63ea2631329","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":3055.0,"y":1241.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"de637e18-bd0b-44b0-b7ba-123fec0f9fa9","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":2659.0,"y":2025.7}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Portão","elementType":"SequenceFlow","properties":[]}]},{"id":"fbe52572-93d2-45a3-bc1e-857b357db863","name":"Incluir documento 100 - Autorização uso de suprimento para alimentos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1070.0,"y":241.0}],"radius":0.0,"height":72.0,"width":116.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"05aa2227-4f59-4fcc-b3c9-ad1a92854fb6","name":"Nenhum evento","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1113.0,"y":560.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"42da5937-06bc-4caa-95e2-5fea619a4dfd","name":"[DEO] 08-01 Pagar faturas de suprimento de fundos","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":890.0,"y":1688.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"[DEO] 08-01 Pagar faturas de suprimento de fundos - [DEO] 09 Pagar faturas de suprimento de fundos","type":"url","pageRef":"3581449d-476d-495f-bbde-4946836b9bb6","processPageRef":"31c6ef6a-d647-4a6a-b65d-464117b2e230"}]},{"id":"b44aa663-9c79-4008-9e99-b3fede4e7c1d","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":588.8889,"y":2025.7}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"492bed8b-130c-44e3-b26a-1ee18e8f080b","name":"Comunicar suprido","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":367.0,"y":974.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9d125e9b-b5ad-49b1-bcb7-a544eac5d141","name":"Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":367.0,"y":2015.7}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6abc9c06-d35b-456d-abec-f21276ea4e09","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":397.0,"y":2120.7}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"a1877414-25e6-4e61-8f16-c7a137e6700f","name":"Suprido","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":478.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"da402c78-7e04-4a6b-b21f-fce734c965d7","name":"Responsável pela solicitação","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":498.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"8ada388b-91b5-4d46-a787-b498fd72051f","name":"PROAD","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":698.0}],"radius":0.0,"height":384.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"0e1e11ed-cb41-46fe-ab66-907baad8da29","name":"DEO","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1082.0}],"radius":0.0,"height":345.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"07d54b42-a647-48ea-ac26-d9161e017ca2","name":"DCF","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1427.0}],"radius":0.0,"height":469.7,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"676a4f65-249c-4c8a-8c36-d178197d0018","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1896.7}],"radius":0.0,"height":310.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]},{"id":"3581449d-476d-495f-bbde-4946836b9bb6","name":"[DEO] 08-01 Pagar faturas de suprimento de fundos","version":"1.0","author":"ariel","image":"files\\diagrams\\DEO]_08_01_Pagar_faturas_de_suprimento_de_fundos.png","isSubprocessPage":false,"elements":[{"id":"31c6ef6a-d647-4a6a-b65d-464117b2e230","name":"[DEO] 09 Pagar faturas de suprimento de fundos","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":844.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"2c1e4c05-8bbc-4461-9756-5faebd755d80","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":142.0,"y":291.5}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"d8d6e7ac-6a1f-46e7-837b-532d30931fa4","name":"Abrir processo de pagamento de faturas de suprimento de fundos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":261.0,"y":265.0}],"radius":0.0,"height":83.0,"width":114.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e331ff12-60df-45b8-bf9d-f12548a33ba1","name":"Aguardar fechamento da fatura mensal","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":303.0,"y":401.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"0bbcea92-3c97-4013-a0c4-4d2612ec78b8","name":"Incluir em PDF fatura","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":461.0,"y":386.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a7346c70-7ba1-49a0-b424-fcd9c3004a70","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":639.0,"y":381.5}],"radius":0.0,"height":69.0,"width":112.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c78ca7e9-855f-4972-8cbd-956b96eaf76f","name":"Incluir documento 040 -Prestação de contas de SP - parcial","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":883.0,"y":99.0}],"radius":0.0,"height":74.0,"width":129.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a8a4510a-8d24-4ef0-988f-33036f396093","name":"Incluir documento        990 - Informe de documentos gerados no SIAFI","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":888.0,"y":385.0}],"radius":0.0,"height":74.0,"width":119.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"99a33bad-8dc9-49b4-a946-5668a2fb0eb5","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":927.0,"y":547.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"bdef52e1-7bd5-423d-a437-b0bd1f3b131a","name":"Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":902.0,"y":738.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4ebd56ec-9126-45a7-a602-603a2bbff944","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1034.0,"y":753.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"b2965c7f-6439-4882-a275-0c224f3af402","name":"Suprido","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":199.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"c0fa2c7a-5d9e-469e-90db-a2e293733007","name":"DCF","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":219.0}],"radius":0.0,"height":445.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"3126d5a7-58ca-46fc-9161-d853f75624d1","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":664.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"3581449d-476d-495f-bbde-4946836b9bb6","containerName":"[DEO] 08-01 Pagar faturas de suprimento de fundos","isSubprocess":false,"elements":[{"id":"31c6ef6a-d647-4a6a-b65d-464117b2e230","value":"[DEO] 09 Pagar faturas de suprimento de fundos"},{"id":"b2965c7f-6439-4882-a275-0c224f3af402","value":"Suprido"},{"id":"c0fa2c7a-5d9e-469e-90db-a2e293733007","value":"DCF"},{"id":"3126d5a7-58ca-46fc-9161-d853f75624d1","value":"DIARQ"},{"id":"0bbcea92-3c97-4013-a0c4-4d2612ec78b8","value":"Incluir em PDF fatura"},{"id":"2c1e4c05-8bbc-4461-9756-5faebd755d80","value":""},{"id":"a8a4510a-8d24-4ef0-988f-33036f396093","value":"Incluir documento        990 - Informe de documentos gerados no SIAFI"},{"id":"a7346c70-7ba1-49a0-b424-fcd9c3004a70","value":"Incluir documento 872 - Despacho simples"},{"id":"c78ca7e9-855f-4972-8cbd-956b96eaf76f","value":"Incluir documento 040 -Prestação de contas de SP - parcial"},{"id":"d8d6e7ac-6a1f-46e7-837b-532d30931fa4","value":"Abrir processo de pagamento de faturas de suprimento de fundos"},{"id":"99a33bad-8dc9-49b4-a946-5668a2fb0eb5","value":""},{"id":"bdef52e1-7bd5-423d-a437-b0bd1f3b131a","value":"Realizar tratamento arquivístico"},{"id":"4ebd56ec-9126-45a7-a602-603a2bbff944","value":""},{"id":"e331ff12-60df-45b8-bf9d-f12548a33ba1","value":"Aguardar fechamento da fatura mensal"},{"id":"cb20555e-d70f-45ec-b365-bf4b0c08b6a1"},{"id":"8f3893f2-1504-45cf-adbf-733f3824f914"},{"id":"4d424275-852d-4cc9-b9ca-131132070700"},{"id":"d059d706-6426-4bfb-ab3d-1ff1ae3b11fa"},{"id":"91b865c8-8960-4c0c-835a-f3a7d03e84bb"},{"id":"39f24bd0-d76a-4579-b50a-5ee42311fe72"}]},{"containerId":"feae2b79-a973-48f9-94a2-34a799d78b84","containerName":"[DEO] 08 Solicitar suprimento de fundos","isSubprocess":false,"elements":[{"id":"ad17bb4f-d60c-45a6-b305-09a7eeae660e","value":"[DEO] 08 Solicitar suprimento de fundos"},{"id":"a1877414-25e6-4e61-8f16-c7a137e6700f","value":"Suprido"},{"id":"da402c78-7e04-4a6b-b21f-fce734c965d7","value":"Responsável pela solicitação"},{"id":"8ada388b-91b5-4d46-a787-b498fd72051f","value":"PROAD"},{"id":"0e1e11ed-cb41-46fe-ab66-907baad8da29","value":"DEO"},{"id":"07d54b42-a647-48ea-ac26-d9161e017ca2","value":"DCF"},{"id":"676a4f65-249c-4c8a-8c36-d178197d0018","value":"DIARQ"},{"id":"766ac118-2a04-4204-85a0-5c623d8ac08f","value":""},{"id":"04f20c61-9411-4920-ba86-27254d6b908a","value":"Abrir processo de  suprimento de fundos"},{"id":"6abc9c06-d35b-456d-abec-f21276ea4e09","value":""},{"id":"e634cc72-4f21-448f-99f8-b7fca887fb7e","value":"Incluir documento 037 -  Solicitação de  suprimento de fundos"},{"id":"9d125e9b-b5ad-49b1-bcb7-a544eac5d141","value":"Realizar tratamento arquivístico"},{"id":"d94cc773-4d8e-4509-a434-0df67905d34f","value":"Analisar solicitação"},{"id":"2c6e324d-0627-47b1-8d7b-384030cdb007","value":""},{"id":"d247abce-c243-4e1c-a500-eef5de0962b0","value":"Incluir documento 036 - Análise e deliberação"},{"id":"1dc12192-3704-4699-9c20-63a9bd6733d5","value":""},{"id":"8fbdf8a2-3456-4b18-9421-0eea89090bd2","value":"Assinar documento em bloco"},{"id":"c37e80ea-fe6b-48d5-9444-c1da6514a934","value":"Assinar documento em bloco"},{"id":"ea42304f-7102-4259-b389-846057ac7df7","value":"  Incluir documento               989-Apropriação/ Liquidação"},{"id":"22dc1c4b-61bd-4dea-aa83-45546eebe66c","value":"Incluir documento 041 - Prestação de contas de SP - final"},{"id":"5179defd-269b-4355-8dbc-3812f5a9c40e","value":"Realizar análise  da prestação de contas"},{"id":"90f4ec87-3e28-4afd-bca7-ce71a38e11e5","value":""},{"id":"56e4288f-a5b9-4a1b-be7e-8ba12df5117c","value":"Incluir documento 872 - Despacho simples"},{"id":"24d4897e-8300-4578-892a-20bf6b04aa11","value":"Incluir documento 191 - Parecer"},{"id":"0a882839-6b06-4ca2-b5e1-8f3557588751","value":"Realizar as devidas correções"},{"id":"421cfa50-058a-4276-b129-e752b01db4cb","value":"Incluir documento 036 -  Análise e deliberação"},{"id":"731754c1-798e-46d4-b0f6-6789f6e3e177","value":"Incluir documento 872 - Despacho simples"},{"id":"7980e9d7-80c7-4ec7-956a-1404fb14e9d6","value":"Incluir documento 986 -  Nota de empenho"},{"id":"ef2aaa71-8ac3-48fe-8a84-66a83177cadd","value":""},{"id":"fe6fca66-5297-4b17-8548-e23ab5e791eb","value":"Assinar documento em bloco"},{"id":"d44b0dd4-7e5c-49e8-b149-4b910ccab2ff","value":"Assinar documento em bloco"},{"id":"26e1ab0e-0e36-4d4d-bc80-04c4d793a0c9","value":"Incluir documento 836 - Disponibilidade orçamentária"},{"id":"492bed8b-130c-44e3-b26a-1ee18e8f080b","value":"Comunicar suprido"},{"id":"7f87449a-3ef4-43a4-ad61-0e773cb0753b","value":"Executar anulação do empenho "},{"id":"d228c544-2c81-4b74-bb1d-6af3eaece97a","value":"incluir documento   986 - Nota de empenho"},{"id":"44a8ffe9-366e-4c90-bf18-8893a3315320","value":"Aquisição de insumos alimentícios?"},{"id":"822cca4a-610b-46a0-97b4-662d807fead0","value":"Incluir documento  073 - Autorização uso de suprimento fundos geral"},{"id":"fbe52572-93d2-45a3-bc1e-857b357db863","value":"Incluir documento 100 - Autorização uso de suprimento para alimentos"},{"id":"b2c84eb0-5283-4250-a2e0-8e9ebdd75b53","value":"Assinar documento em bloco"},{"id":"fca1f73b-9a0d-49c9-a128-1f3cba3ab5aa","value":"Realizar compra"},{"id":"fe19dba9-4449-4e57-8295-7ebd4f8c4c58","value":"Incluir em PDF nota fiscal da compra realizada"},{"id":"460a82a5-7cd1-473e-97ff-9446f06a0631","value":"Aguardar pedidos"},{"id":"3f1cb7b8-1afc-40dc-b1ba-30ec6eff4b44","value":"Prazo do suprimento de fundos  encerrado?"},{"id":"1dbbd8c5-d2ac-4fb7-b5bb-6c1b091e4d3a","value":"Anexar processos de aquisição"},{"id":"524abd5b-69bd-4c4b-bb9f-d660901237a4","value":""},{"id":"5e601b41-1d91-44c4-a58d-d63ea2631329","value":""},{"id":"f1d51a08-0cc7-4634-8958-8ac2e3ef70e6","value":"Assinar documento em bloco"},{"id":"05aa2227-4f59-4fcc-b3c9-ad1a92854fb6","value":""},{"id":"42da5937-06bc-4caa-95e2-5fea619a4dfd","value":"[DEO] 08-01 Pagar faturas de suprimento de fundos"},{"id":"96bdad76-20ac-4830-8a6b-430918d23aba","value":"É necessária a anulação de saldos não utilizados?"},{"id":"a1a644a0-0d39-497a-8681-88a187034734","value":"Foram realizadas aquisições em processos não relacionados a este de suprimento de fundos?"},{"id":"82f06a62-e2bc-40c5-ad6d-d808c1d700fc","value":""},{"id":"de637e18-bd0b-44b0-b7ba-123fec0f9fa9","value":""},{"id":"b44aa663-9c79-4008-9e99-b3fede4e7c1d","value":""},{"id":"0587503e-6f01-44f8-bfe1-dcb826c30dd6"},{"id":"2741abaf-ef2c-439e-89ee-23b21f6572e6"},{"id":"03b3ac68-ca55-4c2f-81a5-c42957487f87"},{"id":"c4eda22c-9f59-40d3-b889-c025d69df928"},{"id":"65c65115-fd68-4ddc-b886-0efd2d6079ac"},{"id":"7e1c1205-e353-40c3-b125-79c1f41998b3"},{"id":"665a80c4-f32d-4c55-aa89-05a53de6526b"},{"id":"0eb60fe7-6f7d-413d-abeb-78c34509deb3"},{"id":"2b2d2e71-fc62-4d5e-8f14-9cabd08e0c94"},{"id":"0ad712af-92bb-4e4c-a09e-919ddb259f97"},{"id":"d85107f4-780f-4c10-b8dc-c6d205ff9e25"},{"id":"1777a0ab-5190-468e-bf78-0b0aa0c03af5"},{"id":"6dbb38fe-aea1-4026-b5a4-8f75a209646a"},{"id":"42791005-22d2-43af-8b1c-4f214c41611a"}]}]}