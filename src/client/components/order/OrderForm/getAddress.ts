type Result = {
  address1: string;
  address2: string;
  address3: string;
  prefcode: string;
  kana1: string;
  kana2: string;
  kana3: string;
  zipcode: string;
};

type Response = {
  message: string;
  results: Result[];
  status: number;
};

type Return = {
  city: string;
  prefecture: string;
};

export const getAddres = async (zipCode: string): Promise<Return | undefined> => {
  try {
    const res = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipCode}`);
    console.log('res', res);
    if (!res.ok) {
      return;
    }
    const { results: data } = (await res.json()) as Response;
    console.log(data);

    if (!data) {
      return;
    }

    return { city: `${data[0].address2} ${data[0].address3}`, prefecture: data[0].address1 };
  } catch (e) {
    throw new Error(`[getAddress] ${e}`);
  }
};
